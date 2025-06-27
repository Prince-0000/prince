console.log('Is browser:', typeof window !== 'undefined');
console.log('Env value:', process.env.NEXT_PUBLIC_SANITY_DATASET);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-25'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "portfolio",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "kayr4vjw",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
