const apiURL = import.meta.env.VITE_APP_API_URL

async function fetcher(
  endpoint,
  { data, headers: customHeaders, ...customConfig } = {},
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export { fetcher }
