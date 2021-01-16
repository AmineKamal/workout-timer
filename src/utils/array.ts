export function range(min: number, max: number, size: number)
{
    const step = (max - min) / (size - 1);
    const array = [];

    for (let i = min; Math.ceil(i) <= max; i += step)
    {
        array.push(i);
    }

    return array;
}

export function sum(array: number[])
{
    return array.reduce((p, v) => p + v, 0);
}

export function avg(array: number[])
{
    return sum(array) / array.length;
}

export function weightedAvg(array: number[], min: number, max: number)
{
    const weights = range(min, max, array.length);
    const weightsSum = sum(weights);
    const average = array.map((v, i) => v * weights[i]);

    return sum(average) / weightsSum;
}
