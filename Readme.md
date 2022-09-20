current build method from proto to javascript:
`pip3 install grpc_web_proto_compile`
`grpc_web_proto_compile --clear_output_dir --verbosity=1 --js_out_options="import_style=commonjs,binary" --grpc_web_out_options="import_style=commonjs+dts,mode=grpcweb" ./proto ./src`