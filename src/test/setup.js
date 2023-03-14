import { expect, beforeAll, afterAll, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

//Boilerplate for Mock Service Worker to mock server requests
import { server } from "../mocks/server.ts";
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
afterEach(() => cleanup());
// Clean up after the tests are finished.
afterAll(() => server.close());
