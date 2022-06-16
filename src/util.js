import dayjs from "dayjs";

export function getMonth (m = dayjs().month()) {
    const y = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(y, m, 1)).day();

    let currentMonthCount = 0 - firstDayOfTheMonth;

    const dayMatrix = new Array(5).fill([]).map(() => {
        return new Array(5).fill([]).map(() => {
            currentMonthCount++;
            return dayjs(new Date(y, m, currentMonthCount));
        });
    });
    return dayMatrix;
}