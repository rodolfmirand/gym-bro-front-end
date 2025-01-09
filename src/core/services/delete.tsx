export const DELETE = async (url: string, token: unknown) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      const data = responseData.data ? responseData.data : responseData;
      return { success: true, data };
    } else {
      console.error("Erro na requisição DELETE:", response.statusText);
      return { success: false, message: `Erro: ${response.statusText}` };
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return { success: false, message: `Erro na requisição: ${error}` };
  }
};
