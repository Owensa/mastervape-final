require 'net/http/server'
require 'pp'

Net::HTTP::Server.run(:port => 8080) do |request,stream|
  pp request

  [200, {'Content-Type' => 'text/html'}, [' Pushing moltin requests and responses']]
end 0
