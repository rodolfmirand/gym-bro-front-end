export const UPDATE = async (url: string, token: unknown, body: unknown) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const responseData = await response.json();
      const data = responseData.data ? responseData.data : responseData;
      return { success: true, data };
    } else {
      console.error("Erro na requisição UPDATE:", response.statusText);
      return { success: false, message: `Erro: ${response.statusText}` };
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return { success: false, message: `Erro na requisição: ${error}` };
  }
};
