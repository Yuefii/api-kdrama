import prisma from "../libs/prisma";

export const createKdramaService = async (title: string, type: string, seasons: number) => {
    const totalMovies = await prisma.movies.count();
    const formattedId = String(totalMovies + 1).padStart(4, '0');

    return await prisma.movies.create({
        data: {
            k_id: formattedId,
            title,
            type,
            seasons: Number(seasons),
        }
    });
};

export const updateKdramaService = async (k_id: string, title: string, type: string, seasons: number) => {
    return await prisma.movies.update({
        where: {
            k_id: k_id,
        },
        data: {
            title,
            type,
            seasons: Number(seasons),
        },
    });
};

export const deleteKdramaService = async (k_id:string) => {
    return await prisma.movies.delete({
        where: {
            k_id: k_id,
        },
    });
};

export const getAllKdramaService = async () => {
    return await prisma.movies.findMany();
};