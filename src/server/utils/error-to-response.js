// src/server/utils/error-to-response.js
import { AppError, STATUS_CODES } from "@/server/utils/app-errors";

export function errorToResponse(err) {
  if (err instanceof AppError) {
    return {
      status: err.statusCode || STATUS_CODES.INTERNAL_ERROR,
      body: { ok: false, name: err.name, message: err.message },
    };
  }
  // unknown error
  return {
    status: STATUS_CODES.INTERNAL_ERROR,
    body: {
      ok: false,
      name: "INTERNAL_ERROR",
      message: "Internal Server Error",
    },
  };
}

// Optional: wrapper for Next route handlers
export function withError(handler) {
  return async (...args) => {
    const { NextResponse } = await import("next/server");
    try {
      return await handler(...args);
    } catch (err) {
      const { status, body } = errorToResponse(err);
      // Log the stack in dev
      if (process.env.NODE_ENV !== "production") console.error(err);
      return NextResponse.json(body, { status });
    }
  };
}
