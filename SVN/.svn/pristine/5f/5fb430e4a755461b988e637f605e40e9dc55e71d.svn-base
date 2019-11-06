public class htmlLink {

    public enum type{
        EXTERNAL, INTERNAL
    }
    public enum status {
        OK, NOT_WORKING, TO_CHECK
    }

    static type type;
    String href;
    status status;

    public htmlLink(type type, String href, status status){
        this.type=type;
        this.href=href;
        this.status=status;
    }
    public htmlLink(){

    }
    public void setType(int x){
        if(x==0){
            type= type.EXTERNAL;
        }else{
            type= type.INTERNAL;
        }
    }
    public void setStatus(int x){
        if(x==0){
            status= status.OK;
        }else{
            status=status.NOT_WORKING;
        }
    }
    public void setHref(String s){
        href = s;
    }
}
