export const useAvailableOptions = (data: any, propertyName: string) => {
    const availableOptions: string[] = [];

    if (data) {
        data.forEach((dataPiece: any) => {
            const piece = dataPiece[propertyName] ?? 'Unknown';

            if (!availableOptions.includes(piece)) {
                availableOptions.push(piece);
            }
        });
    }

    return availableOptions;
};

export default useAvailableOptions;
