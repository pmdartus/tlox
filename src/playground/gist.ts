const GITHUB_API = 'https://api.github.com';

const MAIN_FILE_NAME = 'main.lox';
const DEFAULT_DESCRIPTION = `Created by https://pmdartus.github.io/tlox/`;

export async function saveGist(src: string) {
    const payload = {
        description: DEFAULT_DESCRIPTION,
        public: true,
        files: {
            [MAIN_FILE_NAME]: {
                content: src,
            },
        },
    };

    const response = await fetch(`${GITHUB_API}/gists`, {
        method: 'POST',
        body: JSON.stringify(payload),
    });

    const res = await response.json();

    if (!response.ok) {
        throw new Error(res.message);
    }

    return res.id;
}

export async function loadGist(id: string) {
    const response = await fetch(`${GITHUB_API}/gists/${id}`);
    const res = await response.json();

    if (!response.ok) {
        throw new Error(res.message);
    }

    return res.files[MAIN_FILE_NAME].content;
}