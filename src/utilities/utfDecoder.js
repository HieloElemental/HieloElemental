const decodeResponse = async (response) => {
  const responseData = await response.json();
  if (responseData.message === "Not Found") {
    throw { message: "Cannot find the post", status: "404" };
  }
  if (responseData.status === "403") {
    throw new Error({
      message: "Limit API posts-per-hour reached",
      status: "403",
    });
  }

  const decodedContent = atob(responseData.content);

  if (decodedContent[0] == "{") {
    const textDecoder = new TextDecoder("utf-8");
    const jsonContent = JSON.parse(
      textDecoder.decode(
        new Uint8Array([...decodedContent].map((c) => c.charCodeAt(0)))
      )
    );
    return { ...jsonContent };
  } else {
    const binaryLength = decodedContent.length;
    const bytes = new Uint8Array(binaryLength);
    for (let i = 0; i < binaryLength; i++) {
      bytes[i] = decodedContent.charCodeAt(i);
    }

    const decodedString = new TextDecoder("utf-8").decode(bytes);
    return decodedString;
  }
};

export default decodeResponse;
