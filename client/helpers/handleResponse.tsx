export function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (response.status !== 200 && response.status !== 201) {
        switch (response.status) {
          case 400:
            break;
  
          case 401:
            break;
  
          case 403:
            break;
  
          case 404:
            break;
  
          case 500:
            break;
  
          default:
            return undefined;
        }
      } else {
        return data;
      }
    });
  }
  