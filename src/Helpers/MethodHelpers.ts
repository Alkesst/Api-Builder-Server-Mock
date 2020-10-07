export const FileReaderToJson = (err, data) => {
    if (err) throw err;
    return JSON.parse(data);
};