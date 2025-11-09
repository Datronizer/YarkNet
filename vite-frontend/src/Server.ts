const HOST: string = 'localhost';
const PORT: number = 4000;
const baseUrl: string = `http://${HOST}:${PORT}`;

export const getAsteroids = async (): Promise<any> =>
{
    const init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }

    const response = await fetch(`${baseUrl}/asteroids`, init);
    if (!response.ok)
    {
        throw new Error(`Error fetching asteroids: ${response.statusText}`);
    }
    return await response.json();
}