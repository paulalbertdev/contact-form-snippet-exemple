import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                name: null,
                email: null,
                content: null,
            },
        };
    },
    mounted: function() {},
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(5),
            },
            email: {
                required,
                email,
            },
            content: {
                required,
                minLength: minLength(30),
            },
        },
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            alert('Form submitted!');
        },
    },
};
