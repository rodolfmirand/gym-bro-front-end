export const GET = async (url: string, params: Record<string, never> = {}) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const finalUrl = queryParams ? `${url}?${queryParams}` : url;

    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      const data = responseData.data ? responseData.data : responseData;
      return { success: true, data }; 

    } else {
      console.error("Erro na requisição GET:", response.statusText);
      return { success: false, message: `Erro: ${response.statusText}` };
    }
  } catch (error) {
    
    console.error("Erro na requisição:", error);
    return { success: false, message: `Erro na requisição: ${error}` };
  }
};
