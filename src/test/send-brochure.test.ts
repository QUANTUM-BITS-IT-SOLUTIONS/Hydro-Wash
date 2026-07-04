/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import handler from '../../api/send-brochure';

vi.mock('resend', () => {
  return {
    Resend: vi.fn().mockImplementation(() => {
      return {
        emails: {
          send: vi.fn().mockResolvedValue({ id: 'mock-email-id' }),
        },
      };
    }),
  };
});

describe('send-brochure API handler', () => {
  it('should successfully read brochure and trigger Resend email sending', async () => {
    // Setup env variable
    process.env.RESEND_API_KEY = 're_test_key_12345';

    const req = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
        service: 'Ultra Ceramic Coating',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(200);
    expect(jsonVal).toEqual({ success: true });
  });

  it('should return 400 when name is missing', async () => {
    const req = {
      method: 'POST',
      body: {
        email: 'test@example.com',
        phone: '9876543210',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(400);
    expect(jsonVal.error).toContain('Missing required fields');
  });

  it('should return 500 when RESEND_API_KEY is not defined', async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    const req = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(500);
    expect(jsonVal.error).toContain('Email service is not configured');

    process.env.RESEND_API_KEY = originalKey;
  });
});
