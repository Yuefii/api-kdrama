import path from 'path';
import prisma from "../libs/prisma";

export const createKdramaService = async (
    title: string,
    synopsis: string,
    type: string,
    seasons: number,
    genres: { genre: string }[]) => {

    const totalMovies = await prisma.movies.count();
    const formattedId = String(totalMovies + 1).padStart(4, '0');

    return await prisma.movies.create({
        data: {
            k_id: formattedId,
            title,
            synopsis,
            type,
            seasons: Number(seasons),
            genres: {
                create: genres.map(genre => ({ genre: genre.genre }))
            }
        }
    });
};

export const updateKdramaService = async (
    k_id: string,
    title: string,
    type: string,
    seasons: number,
    synopsis: string,
    genres: { genre: string }[]) => {

    return await prisma.movies.update({
        where: {
            k_id: k_id,
        },
        data: {
            title,
            type,
            seasons: Number(seasons),
            synopsis,
            genres: {
                create: genres.map(genre => ({ genre: genre.genre }))
            }
        },
    });
};

export const uploadImageUrlKdramaService = async (
    k_id: string,
    fileName: string) => {

    return await prisma.movies.update({
        where: {
            k_id: k_id,
        },
        data: {
            imageUrl: fileName
        },
    });
};

export const deleteKdramaService = async (k_id: string) => {
    return await prisma.movies.delete({
        where: {
            k_id: k_id,
        },
    });
};

export const getAllKdramaService = async () => {
    return await prisma.movies.findMany({
        include: {
            genres: true
        }
    });
};

export const getImageUrlService = (imageUrl: string) => {
    const imagePath = path.join(__dirname, '../../', 'images', imageUrl);
    return imagePath;
};

export const getBySearchService = async (keyword: any) => {
    let searchData;
    if (keyword) {
        searchData = await prisma.movies.findMany({
            where: {
                OR: [
                    { title: { contains: keyword } },
                    { synopsis: { contains: keyword } }
                ]
            }
        });
    } else {
        throw new Error('Missing search criteria');
    }
    return searchData;
}