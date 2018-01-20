

export default [{
    input: 'src/scripts/login/jarc.ts',
    output: {
        name: 'jarc_login',
        format: 'umd',
        file: 'dist/login/jarc.bundle.es2015.js'
    },
    plugins: [
        typescript2({
            include: [ "login/*.ts+(|x)", "**/login/*.ts+(|x)" ],
            "useTsconfigDeclarationDir": true,
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify())
    ]
},
{
    input: 'src/scripts/main/jarc.ts',
    output: {
        name: 'jarc_main',
        format: 'umd',
        file: 'dist/main/jarc.bundle.es2015.js'
    },
    plugins: [
        typescript2({
            include: [ "main/*.ts+(|x)", "**/main/*.ts+(|x)" ],
            "useTsconfigDeclarationDir": true,
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify())
    ]
}]