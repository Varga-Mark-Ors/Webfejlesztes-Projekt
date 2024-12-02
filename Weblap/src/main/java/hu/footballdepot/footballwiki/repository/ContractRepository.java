package hu.footballdepot.footballwiki.repository;

import hu.footballdepot.footballwiki.model.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface ContractRepository
        extends JpaRepository<Contract, UUID> {

    @Modifying
    @Query("DELETE FROM Contract c WHERE c.player.idNumber = :playerIdNumber")
    void deleteByPlayerIdNumber(@Param("playerIdNumber") String playerIdNumber);

}
