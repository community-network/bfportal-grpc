current build method from proto to javascript:
`pip3 install proto-compile`
`proto-compile --clear-output-dirs --verbosity=1 ./proto ./src/proto grpc-web --grpc_web_out_options="import_style=commonjs+dts,mode=grpcweb"`

https://github.com/romnn/proto-compile