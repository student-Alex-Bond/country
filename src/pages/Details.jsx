import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {Button} from '../components/Button';
import {Info} from '../components/Info';
import {selectDetails} from "../store/details/details-selector";
import {clearCurrentCountry, loadCountryByName} from "../store/details/details-action";


export const Details = () => {
    const dispatch = useDispatch()

    const {name} = useParams();
    const navigate = useNavigate();

    const {currentCountry, error, status} = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name))

        return ()=> {
            dispatch(clearCurrentCountry())
        }
    }, [name, dispatch])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
