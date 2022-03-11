const fetchJSON = async (FILE_PATH) => {
    const response = await fetch(FILE_PATH);
    if (!response.ok) return console.error("Fetch failed!");
    const data = await response.json();
    return data;
};
