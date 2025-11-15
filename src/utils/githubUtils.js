/**
 * Convierte una URL de repositorio de GitHub a la URL raw del README.md
 * @param {string} repoUrl - URL del repositorio de GitHub (ej: https://github.com/owner/repo)
 * @param {string} branch - Rama del repositorio (por defecto: 'main')
 * @returns {string|null} URL raw del README o null si la URL no es válida
 */
export const getGitHubReadmeUrl = (repoUrl, branch = 'main') => {
    if (!repoUrl || typeof repoUrl !== 'string') {
        return null;
    }

    try {
        // Extraer owner y repo de la URL de GitHub
        // Formato esperado: https://github.com/owner/repo o https://github.com/owner/repo/
        const githubRegex = /github\.com\/([^\/]+)\/([^\/]+)/;
        const match = repoUrl.match(githubRegex);

        if (!match) {
            console.warn('URL de GitHub no válida:', repoUrl);
            return null;
        }

        const [, owner, repo] = match;
        // Limpiar el nombre del repo (puede tener .git al final o trailing slash)
        const cleanRepo = repo.replace(/\.git$/, '').replace(/\/$/, '');

        // Construir la URL raw del README
        return `https://raw.githubusercontent.com/${owner}/${cleanRepo}/${branch}/README.md`;
    } catch (error) {
        console.error('Error al construir URL del README:', error);
        return null;
    }
};

/**
 * Obtiene el README desde GitHub, intentando primero con 'main' y luego con 'master' como fallback
 * @param {string} repoUrl - URL del repositorio de GitHub
 * @returns {Promise<string>} Contenido del README
 */
export const fetchGitHubReadme = async (repoUrl) => {
    if (!repoUrl) {
        throw new Error('URL del repositorio no proporcionada');
    }

    // Intentar primero con 'main'
    let readmeUrl = getGitHubReadmeUrl(repoUrl, 'main');
    
    if (!readmeUrl) {
        throw new Error('No se pudo construir la URL del README');
    }

    try {
        const response = await fetch(readmeUrl);
        
        if (response.ok) {
            return await response.text();
        }
        
        // Si falla con 'main', intentar con 'master'
        if (response.status === 404) {
            readmeUrl = getGitHubReadmeUrl(repoUrl, 'master');
            const fallbackResponse = await fetch(readmeUrl);
            
            if (fallbackResponse.ok) {
                return await fallbackResponse.text();
            }
        }
        
        throw new Error(`README no encontrado (${response.status})`);
    } catch (error) {
        throw new Error(`Error al obtener README desde GitHub: ${error.message}`);
    }
};

