
import i__rollup_plugin_babel from 'rollup-plugin-babel'


export default (object) => {
	return {
		input: [
			'source/cli',
		],
		output: {
			dir: 'public',
			format: 'cjs',
		},
		plugins: [
			i__rollup_plugin_babel({
				presets: [
					'@babel/env',
				],
			}),
		],
	}
}
