import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/store/counterSlice";

export default function CounterPage() {
  // const [check, setCheck] = useState(0);

  const count = useAppSelector((state) => state.counter.value);
  // const { value, users } = useAppSelector((state) => state.counter);
  // const newUsersLength = useAppSelector(countUsers);

  const dispatch = useAppDispatch();

  // const clickIncrease = () => {
  //   setCheck(100);
  //   setCheck(1 + check);
  //   console.log("onClick >>>", check);
  // };

  // console.log(check);

  return (
    <div className="flex items-center justify-center gap-3">
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      {/* <Button onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount 2
        </Button>
        <div>{newUsersLength}</div> */}
    </div>
  );
}
