import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Test in useForm', () => {
    const initialForm = {
        name: 'Juan',
        email: 'Juan@gmail.com'
    };

    test('should return form default', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should change values form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });
    });

    test('should reset form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});
