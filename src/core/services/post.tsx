export const Post = async (url: string, data: unknown) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      const data = responseData.data ? responseData.data : responseData;
      return { success: true, data }; 

    } else {
      console.error("Erro na requisição POST:", response.statusText);
      return { success: false, message: response.statusText };
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return { success: false, message: error };
  }
};
