from fastapi import APIRouter

router = APIRouter(
    prefix="/users",
    tags=["users"],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)


fake_user_db = {"austin": {"status": "active", }, }


@router.get("/")
async def read_users():
    return fake_user_db


@router.post("/{user_name}")
def read_users(user_name: str):
    context = fake_user_db[user_name]
    return context
