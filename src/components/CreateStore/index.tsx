import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

import { Input } from "../Input";
import { Spinner } from "../Spinner";
import RegisterStoreSchema from "./schema";
import { dbFireStore } from "../../config/firebase";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import { maskToCurrencyValue } from "../../utils/maskToCurrencyValue";
import { handleFirebaseRequestError } from "../../utils/requestError";

import {
	Form,
	GoBack,
	Header,
	Submit,
	FormItem,
	Backdrop,
	ClearData,
	Container,
	FormLabel,
	ErrorText,
	TitleModal,
} from "./styles";

interface ICreateStore {
	onClose: () => void;
}

export const CreateStore: React.FC<ICreateStore> = ({ onClose }) => {
	//IF WANT YOU CAN ADD VIACEP API TO GET THE CITIES...
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const removeVir = /,/g;
	const removeSimbol = /^R\$/;
	const only_number = /^-?\d*\.?\d*$/;
	const initial_values = {
		lng: "",
		lat: "",
		name: "",
		city: "",
		totalMount: "",
	};

	const {
		errors,
		values,
		touched,
		isValid,
		setValues,
		resetForm,
		handleBlur,
		handleSubmit,
		handleChange,
		validateForm,
		setFieldValue,
		setFieldError,
	} = useFormik({
		enableReinitialize: true,
		initialValues: initial_values,
		onSubmit: () => {
			onSubmit();
		},
		validationSchema: RegisterStoreSchema,
	});

	const receiveOnlyNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (only_number.test(event.target.value)) {
			handleChange(event);
		} else {
			event.stopPropagation();
		}
	};

	const clearData = () => {
		setValues(initial_values, true);
	};

	function formatAndValidateMoney(event: React.ChangeEvent<HTMLInputElement>) {
		const input = event.target;
		const value = input.value.replace(/[^0-9.]/g, "");
		const formattedValue = maskToCurrencyValue(value.replace(removeSimbol, ""));
		setFieldValue("totalMount", formattedValue, true);
	}

	const onSubmit = async () => {
		setIsLoading(true);
		try {
			await setDoc(doc(dbFireStore, "stores", values.name), {
				...values,
				lat: Number(values.lat),
				lng: Number(values.lng),
				totalMount: values.totalMount
					.replace(removeSimbol, "")
					.replace(removeVir, "."),
			});

			toast.success("Loja cadastrada com sucesso.", {
				autoClose: 2000,
				position: "top-right",
			});
			setIsLoading(false);
			onClose();
			resetForm();
		} catch (error) {
			setIsLoading(false);
			handleFirebaseRequestError(error as any);
			onClose();
		}
	};

	React.useEffect(() => {
		validateForm();
	}, []);

	return (
		<Backdrop>
			<Container>
				<Header>
					<GoBack icon={ArrowLeftIcon} onClick={onClose} />
					<TitleModal>Cadastrar loja</TitleModal>
				</Header>
				<Form onSubmit={handleSubmit}>
					<FormItem>
						<FormLabel>Nome da loja</FormLabel>
						<Input
							name="name"
							value={values.name}
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder="Digite aqui"
						/>
						{errors.name && touched.name && (
							<ErrorText>{errors.name}</ErrorText>
						)}
					</FormItem>
					<FormItem>
						<FormLabel>Cidade</FormLabel>
						<Input
							name="city"
							onBlur={handleBlur}
							value={values.city}
							onChange={handleChange}
							placeholder="Digite aqui"
						/>
						{errors.city && touched.city && (
							<ErrorText>{errors.city}</ErrorText>
						)}
					</FormItem>
					<FormItem>
						<FormLabel>Latitude</FormLabel>
						<Input
							name="lat"
							value={values.lat}
							onBlur={handleBlur}
							placeholder="Digite aqui"
							onChange={receiveOnlyNumber}
						/>
						{errors.lat && touched.lat && <ErrorText>{errors.lat}</ErrorText>}
					</FormItem>
					<FormItem>
						<FormLabel>Longitude</FormLabel>
						<Input
							name="lng"
							value={values.lng}
							onBlur={handleBlur}
							placeholder="Digite aqui"
							onChange={receiveOnlyNumber}
						/>
						{errors.lng && touched.lng && <ErrorText>{errors.lng}</ErrorText>}
					</FormItem>
					<FormItem>
						<FormLabel>Montante do mês</FormLabel>
						<Input
							name="totalMount"
							onBlur={handleBlur}
							placeholder="Digite aqui"
							value={values.totalMount}
							onChange={formatAndValidateMoney}
						/>
						{errors.totalMount && touched.totalMount && (
							<ErrorText>{errors.totalMount}</ErrorText>
						)}
					</FormItem>
					<Submit disabled={!isValid} type="submit">
						{isLoading && <Spinner />}
						Cadastrar
					</Submit>
					<ClearData onClick={clearData}>Limpar campos</ClearData>
				</Form>
			</Container>
		</Backdrop>
	);
};
