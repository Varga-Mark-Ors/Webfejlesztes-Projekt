package hu.footballdepot.footballwiki.web;

import hu.footballdepot.footballwiki.model.Contract;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@CrossOrigin(origins = "*")
public interface ContractController {

    @GetMapping("/contract")
    List<Contract> findAll();
}
