const R = require('ramda')
const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')

const config = {
    src: 'src',
    dest: '.',
    folders: ['lib', 'cmds', 'test']
}

const fromSrc = filename => path.join(config.src, filename)
const fromDest = filename => path.join(config.dest, filename)

const babelTaskName = folder => 'babel-' + folder

const babelTask = folder => {
    gulp.task(babelTaskName(folder), () => {
        return gulp.src(fromSrc(folder + '/**/*'))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(fromDest(folder)))
    })
}

R.forEach(babelTask, config.folders)

gulp.task('babel', R.map(babelTaskName, config.folders))

gulp.task('default', ['babel'], () => 
    gulp.watch(path.join(config.src, '**/*'), ['babel']))
