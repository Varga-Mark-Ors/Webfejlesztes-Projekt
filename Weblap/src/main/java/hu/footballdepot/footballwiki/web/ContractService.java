package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Contract;
import hu.footballdepot.footballwiki.repository.ContractRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Service
public class ContractService  implements ContractController{
    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(PlayerService.class);


    private ContractRepository contractRepository;

    @Override
    public List<Contract> findAll() {
        LOGGER.info("findAll");
        return contractRepository.findAll();
    }
}
