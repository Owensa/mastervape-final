Rake.application.options.trace_rules = true
# SOURCE_FILES = Rake::FileList.new("**/*.md", "**/*.markdown") do |fl|
#   fl.exclude("~*")
#   fl.exclude(/^scratch\//)
#   fl.exclude do |f|
#     `git ls-files #{f}`.empty?
#   end
# end
#
# task :default- => :html
# task :html => SOURCE_FILES.ext(".html")
#
# rule ".html" => ->(f){source_for_html(f)} do |t|
#   sh "pandoc -o #{t.name} #{t.source}"
# end
#
# def source_for_html(html_file)
#   SOURCE_FILES.detect{|f| f.ext('') == html_file.ext('')}
# end
#
# # # # # # # # # # # # TODO # # # # # # # # # # # # # # # # # # # # # # # #
#   *write deploy build configurayion tasks
#   *write moltin authentification configuration tasks
#   *write stripe authentification configuration tasks
#   *configure project directory children
#               =>  - Andrew Owens
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# BUILD ENTRY #
namespace :main do
  task :default => :setup
end

# marshalling task execution flows for { tests, build, and production depots} #
task :default => :test_build
end

task :live =>
        sh "build -o --verbose"
end

desc "deploy build according to build flags(requires is_public_request flag)"
  task :build do |_ , args|
  sh "rsync -rzt site/build/ web@example.org:public"
end

desc "send request to server for authentication"
  task :server_auth_public_req, [:is_public_request] do |_ , args|
     public_request = args.is_public_request or fail "You don't have permissions to do those types of test. ...aborting task."
end

desc "run series of tests on the site and report logging(requires array of 'tests', auth_key', and )"
  task :runtest [:tests[:default, :live, :test, ]]
  sh "put test data here"
end

















git
