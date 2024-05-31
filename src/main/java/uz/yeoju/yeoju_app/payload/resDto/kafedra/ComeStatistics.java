package uz.yeoju.yeoju_app.payload.resDto.kafedra;

import org.springframework.beans.factory.annotation.Value;
import uz.yeoju.yeoju_app.payload.resDto.attachment.UserPhotoRes;

import java.util.Date;
import java.util.List;

public interface ComeStatistics {

    String getId();
    String getPassport();
    String getLogin();
    String getEmail();
    String getFullName();
    String getRfid();

    Date getTime();

    @Value("#{@kafedraRepository.getEnterTime(target.id)}")
    Date getEnter();

    @Value("#{@positionRepository.getNameOfPosition(target.id)}")
    String getPositions();

    // @Value("#{@positionRepository.getNameOfPosition(target.id)}")
    //    String getPositions();

    @Value("#{@userPhotoRepo.getUserPhotoRes(target.id)}")
    UserPhotoRes getPhoto();

}
