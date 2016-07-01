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

# TODO
#   write deploy build configurayion tasks
#   write moltin authentification configuration tasks
#   write stripe authentification configuration tasks
# =>    - Andrew
desc "deploy build according to build flags(requires is_public_request flag)"
  task "deploy" do
  sh "rsync -rzt site/build/ web@example.org:public"
end

desc "send request to server for authentication"
  task "server_auth_public"
  sh "authenticate to the (#) moltin endpoint(requires )"
end
