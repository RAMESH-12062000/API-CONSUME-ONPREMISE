using {onPremise.db as db} from '../db/data-model';


@path: '/onPremiseSRV'
service onPremiseSRV {
    entity ZTOTECNFWCSTOSAPSet as projection on db.ZTOTECNFWCSTOSAPSet;
}
