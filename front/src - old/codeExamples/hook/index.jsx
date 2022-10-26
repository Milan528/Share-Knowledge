import React, { useState, useEffect, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { homeRoute } from "../../router/routes";
import classStyles, { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import useIsMounted from "../../../../components/isMounted";

export const Hook = (props) => {
  const [value, setValue] = useState(false);
  const classes = classStyles(value);
  const isMounted = useIsMounted();

  const home = useSelector((state) => state.home);
  const { adminBar, departments: optionsStore } = home;
  const dispatch = useDispatch();

  const [dialog, setDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContet, setDialogContent] = useState("");

  const updatePagination = useCallback(() => {
    //code...
  }, [value]);

  useEffect(() => {
    if (isMounted()) console.log("Component is mounted");

    return () => {
      setValue(true);
    };
  }, []);

  const handleClick = () => {
    setDialogTitle("Sifre se razlikuju");
    setDialogContent("Pokusajte ponovo.");
    setDialog(true);

    const path = props.location.pathname;
    if (path !== homeRoute) props.history.push(homeRoute);

    //   props.history.push({
    //     pathname: editPostRoute,
    //     state: { data: data }
    //   })
  };

  return (
    <div>
      <h1>{state.posts}</h1>
      <Button
        className={classes.color}
        style={styles.buttonColor("red")}
        onClick={handleClick}
      />
      <Button
        className={classes.colorCondition}
        classes={{ root: classes.color }}
        onClick={() => setValue(!value)}
      ></Button>
      {/* className={classes.colorCondition} //condition is: const classes = classStyles(value);*/}
      <Dialog
        dialog={dialog}
        setDialog={setDialog}
        dialogTitle={dialogTitle}
        dialogContet={dialogContet}
      />
    </div>
  );
};

export default withRouter(Hook);
