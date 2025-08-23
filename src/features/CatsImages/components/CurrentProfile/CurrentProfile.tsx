import "./style.css";
import type { OpenEditModalProps } from "./types";
import { useCurrentProfile } from "./useCurrentProfile";

export const CurrentProfile = ({
  onOpenEditModal,
  isChecked,
}: OpenEditModalProps) => {
  const { currentUser } = useCurrentProfile();

  return (
    <div className="container-currentProfile">
      <div>
        <h1 className={`text-nameProfile ${isChecked ? "color" : ""}`}>
          Профиль
        </h1>
        <div className="dataProfile">
          <div className="borderProfile">
            <span>ЗП</span>
          </div>
          <div className="dataUser">
            <div>
              <span className={`textData ${isChecked ? "color" : ""}`}>
                Имя: {currentUser?.name}
              </span>
            </div>
            <div>
              <span className={`textData ${isChecked ? "color" : ""}`}>
                Логин: {currentUser?.login}
              </span>
            </div>
            <div>
              <span className={`textData ${isChecked ? "color" : ""}`}>
                Пароль: {currentUser?.password}
              </span>
            </div>
          </div>
        </div>
        <div className="buttons-profile">
          <button className="currentButton" onClick={onOpenEditModal}>
            Редактировать профиль
          </button>
        </div>
      </div>
    </div>
  );
};
