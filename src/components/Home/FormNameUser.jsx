import { useRef } from "react";
import { setTrinerName } from "../../store/slices/trinerName.slice";
import "../../styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormNameUser = () => {
  const { trainerName } = useSelector((state) => state);

  const inputName = useRef();

  const dispath = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(setTrinerName(inputName.current.value.trim()));
    navigate("/pokedex");
  };

  console.log(trainerName);

  return (
    <div className="login">
      <div className="login__img">
        <img src="/img/name.svg" alt="" />
      </div>

      <div className="login__form">
        <div>
          <h3>Hello Trainer!</h3>

          <p>To get started, give me your name</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input className="login__input" ref={inputName} type="text" placeholder="your name..." />
          <button className="login__button">Comenzar</button>
        </form>
      </div>

      <div className="footer">
        <div className="drawn__one"></div>
        <div className="drawn__two"></div>
        <div className="circle">
          <div className="circle__shildren">
            <div className="circle__final"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNameUser;
