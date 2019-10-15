export function logMethod(
  target: object,  propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDesciptor.value;
  propertyDesciptor.value = function(...args: any[]) {
      const params = args.map(a => JSON.stringify(a)).join();
      const result = method.apply(this, args);
      const json = JSON.stringify(result);
      console.log(`Called: ${propertyName}(${params}) => ${json}`);
      return result;
  };
  return propertyDesciptor;
}
