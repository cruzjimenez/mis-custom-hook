# useForm Hook

Ejemplo de uso:
<!-- ''' -->
    const initialForm = {nombre:'', edad: 0, email:''}
    const { values, handleInputChange, reset } = useForm(initialForm);
<!-- ''' -->

useForm() // recibe un JSON y lo agrega a mi arreglo de objetos;
