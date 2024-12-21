export const getEndPoint = path =>{
    const pathSegments = path.split('/').filter(Boolean);
    return  pathSegments[pathSegments.length - 1];
}