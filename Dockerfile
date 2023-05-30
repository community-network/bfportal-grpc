# apple m1:
# docker build --platform linux/amd64 . -t bfportal
# docker run --platform linux/amd64 --rm -v $(pwd):/data bfportal


FROM python:3.11

RUN pip install proto-compile
RUN apt-get update && apt-get install tree

CMD cd /data && proto-compile --clear-output-dirs --verbosity=1 ./proto ./src/proto grpc-web --grpc_web_out_options="import_style=typescript,mode=grpcweb"