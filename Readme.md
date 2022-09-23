### current build method from proto to javascript via python
needs proto-compile, which can be installed with:
`pip3 install proto-compile`

and build with:
`proto-compile --clear-output-dirs --verbosity=1 ./proto ./src/proto grpc-web --grpc_web_out_options="import_style=typescript,mode=grpcweb"`

https://github.com/romnn/proto-compile

### Pushing your changes
package versions can be made with
`npm build`

and
`npm version patch`
`git push —-tags origin master` to release

example library used: https://github.com/tomchen/example-typescript-package
