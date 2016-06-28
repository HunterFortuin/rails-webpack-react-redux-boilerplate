namespace :webpack do
  desc 'compile bundles using webpack'
  task :compile do
    sh 'webpack --config webpack.config.prod.js'
  end
end

namespace :assets do
  task :precompile_assets do
    sh 'rm -rf public/assets'
		sh 'bundle exec rake webpack:compile'
    sh 'bundle exec rake assets:precompile'
  end
end
