// @ts-ignore
export default function isLogged({next}) {
    const token = localStorage.getItem('token');
    console.log({
        token
    })
    if (!token) {
        return next({
            name: 'login'
        })
    }

    return next()
}