python2 closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=jsaction/ \
  --root=test_project/ \
  --namespace="eventOrder.start"\
  --output_mode=script \
  --compiler_jar=closure-compiler.jar \
  > compiled/event_order_debug.js

# python2 closure-library/closure/bin/build/closurebuilder.py \
#   --root=closure-library/ \
#   --root=jsaction/ \
#   --root=test_project/ \
#   --namespace="eventOrder.start"\
#   --output_mode=compiled \
#   --compiler_jar=closure-compiler.jar \
#   > compiled/event_order_compiled.js
